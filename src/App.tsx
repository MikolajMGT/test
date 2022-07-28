import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {Client, Friend, Group, LeaderboardRecord, Notification, StorageObject, User} from '@heroiclabs/nakama-js';
import {ApiMatch} from '@heroiclabs/nakama-js/dist/api.gen';

function App() {
  const client = new Client("defaultkey", "34.136.88.26", "7350");

  const [users, setUsers] = useState<User[]>()
  const [leaderboard, setLeaderBoard] = useState<LeaderboardRecord[]>()
  const [cardsSet, setCardsSet] = useState<StorageObject[]>()
  const [matchesSet, setMatchesSet] = useState<ApiMatch[]>()
  const [tournamentsSet, setTournamentsSet] = useState<ApiMatch[]>()

  useEffect(() => {
    async function load() {
      const session = await client.authenticateEmail("nicolas.migut@evemeta.com", "Strong123")
      const response = await client.getUsers(session, [], ["wcffKUOcAF", "jVmAlARRwX", "tmUjmwuhDt"])
      setUsers(response.users)
      const leaders = await client.listLeaderboardRecords(session, "global", [], 10)
      const cards = await client.listStorageObjects(session, "card_collection")
      const matches = await client.listMatches(session, 10)
      const tournaments = await client.listTournaments(session, undefined, undefined, undefined, undefined, 10)
      setMatchesSet(matches.matches ?? [])
      setCardsSet(cards.objects ?? [])
      setLeaderBoard(leaders.records ?? [])
      setTournamentsSet(tournaments.tournaments ?? [])
      console.log(response)
    }
    load().then(async (resp) => {

    })
  }, [])

  const prepareUsersSummary = () => {

    return users?.map((user) => {
      return (
        <UserInfo client={client} user={user}/>
      )
    });
  }

  const prepareLeaderBoard = () => {

    return leaderboard?.map((item) => (
      <div>
        <pre style={{marginLeft: '20px'}}>{JSON.stringify(item, null, 2)}</pre>
      </div>
    ))
  }

  const prepareCards = () => {

    return cardsSet?.map((item) => (
      <div>
        <pre style={{marginLeft: '20px'}}>{JSON.stringify(item, null, 2)}</pre>
      </div>
    ))
  }

  const prepareMatches = () => {

    if (matchesSet?.length === 0) return <div style={{margin: '10px'}}>No data</div>

    return matchesSet?.map((item) => (
      <div>
        <pre style={{marginLeft: '20px'}}>{JSON.stringify(item, null, 2)}</pre>
      </div>
    ))
  }

  const prepareTournaments = () => {

    if (tournamentsSet?.length === 0) return <div style={{margin: '10px'}}>No data</div>

    return tournamentsSet?.map((item) => (
      <div>
        <pre style={{marginLeft: '20px'}}>{JSON.stringify(item, null, 2)}</pre>
      </div>
    ))
  }

  return (
    <div style={{marginLeft: '20px'}}>
      <div>
        <h1>Info about users</h1>
        <br/>
        {prepareUsersSummary()}
      </div>
      <hr/>
      <hr/>
      <hr/>
      <div>
        <h1>Leaderboard Records</h1>
        <br/>
        {prepareLeaderBoard()}
      </div>
      <hr/>
      <hr/>
      <hr/>
      <div>
        <h1>User's Game Cards</h1>
        <br/>
        {prepareCards()}
      </div>
      <hr/>
      <hr/>
      <hr/>
      <div>
        <h1>Matches being played right now</h1>
        <br/>
        {prepareMatches()}
      </div>
      <hr/>
      <hr/>
      <hr/>
      <div>
        <h1>Tournaments</h1>
        <br/>
        {prepareTournaments()}
      </div>
    </div>
  );
}

interface UserProps {
  client: Client
  user: User
}
export const UserInfo: FC<UserProps> = (props) => {
  const {client, user} = props

  const [friends, setFriends] = useState<Friend[]>()
  const [groups, setGroups] = useState<Group[]>()
  const [notifications, setNotifications] = useState<Notification[]>()

  useEffect(() => {
    async function load() {
      const map = new Map()
      map.set('e12a8b56-47c1-4d75-8304-aae1b9ca2a82', '41b13570-a537-4344-9bd8-0f78d680c8b9')
      map.set('629b9dca-c919-4dea-ae16-ddbd0674bb85', 'b34a2cd5-83cd-4780-8150-f0d10516add8')
      map.set('353a9262-5ea7-46aa-8c6f-a6a8ad506034', '678c1be4-d0f9-450e-ae0d-e8f96ebedfc9')

      const id = map.get(user.id)!
      const session = await client.authenticateDevice(id)
      const friends = await client.listFriends(session)
      const groups = await client.listGroups(session)
      const notifications = await client.listNotifications(session)

      setFriends(friends.friends)
      setGroups(groups.groups)
      setNotifications(notifications.notifications ?? [])
    }
    load().then(async (resp) => {
    })
  }, [])

  useEffect(() => {
    console.log(friends, groups)
  }, [friends, groups])

  return (
    <div style={{marginLeft: '10px'}}>
      <div>
        <h2>UserInfo:</h2>
        <pre style={{marginLeft: '20px'}}>{JSON.stringify(user, null, 2)}</pre>
        <h2 style={{marginLeft: '20px'}}>User's Friends:</h2>
        <pre style={{marginLeft: '40px'}}>{JSON.stringify(friends, null, 2)}</pre>
        <h2 style={{marginLeft: '20px'}}>User's Groups:</h2>
        <pre style={{marginLeft: '40px'}}>{JSON.stringify(groups, null, 2)}</pre>
        <h2 style={{marginLeft: '20px'}}>User's Notifications:</h2>
        <pre style={{marginLeft: '40px'}}>{JSON.stringify(notifications, null, 2)}</pre>
        {notifications?.length === 0 && <div>no data</div>}
      </div>
      <hr/>
    </div>
  )
}

export default App;

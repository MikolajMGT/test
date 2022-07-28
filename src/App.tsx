import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {Client, Friend, Group, User} from '@heroiclabs/nakama-js';

function App() {
  const client = new Client("defaultkey", "34.136.88.26", "7350");

  const [users, setUsers] = useState<User[]>()

  useEffect(() => {
    async function load() {
      const session = await client.authenticateEmail("nicolas.migut@evemeta.com", "Strong123")
      const response = await client.getUsers(session, [], ["wcffKUOcAF", "jVmAlARRwX", "tmUjmwuhDt"])
      setUsers(response.users)
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

  return (
    <div>
      <div>
        <div>Info about users</div>
        <br/>
        {prepareUsersSummary()}
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
      setFriends(friends.friends)
      setGroups(groups.groups)
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
        <div>UserInfo:</div>
        <pre style={{marginLeft: '20px'}}>{JSON.stringify(user, null, 2)}</pre>
        <div>Friends:</div>
        <pre style={{marginLeft: '20px'}}>{JSON.stringify(friends, null, 2)}</pre>
        <div>Groups:</div>
        <pre style={{marginLeft: '20px'}}>{JSON.stringify(groups, null, 2)}</pre>
      </div>
      <hr/>
    </div>
  )
}

export default App;

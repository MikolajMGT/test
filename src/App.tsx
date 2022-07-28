import React, {useEffect, useState} from 'react';
import './App.css';
import {Client, User} from '@heroiclabs/nakama-js';

function App() {
  const client = new Client("defaultkey", "34.136.88.26", "7350");

  const [users, setUsers] = useState<User[]>()
  const [summary, setSummary] = useState<any>()

  useEffect(() => {
    async function load() {
      const session = await client.authenticateEmail("nicolas.migut@evemeta.com", "Strong123")
      const response = await client.getUsers(session, ["wcffKUOcAF", "jVmAlARRwX", "tmUjmwuhDt"])
      setUsers(response.users)
      console.log(response)
    }
    load().then(async (resp) => {
      const res = await Promise.all(prepareUsersSummary()!)
      setSummary(res)
    })
  }, [])

  const prepareUsersSummary = () => {

    const map = new Map()
    map.set('e12a8b56-47c1-4d75-8304-aae1b9ca2a82', '41b13570-a537-4344-9bd8-0f78d680c8b9')
    map.set('629b9dca-c919-4dea-ae16-ddbd0674bb85', 'b34a2cd5-83cd-4780-8150-f0d10516add8')
    map.set('353a9262-5ea7-46aa-8c6f-a6a8ad506034', '678c1be4-d0f9-450e-ae0d-e8f96ebedfc9')

    return users?.map(async (user) => {
      const id = map.get(user.id)!
      const session = await client.authenticateDevice(id)
      const friends = await client.listFriends(session)
      const groups = await client.listGroups(session)

      return (
        <div>
          <div>
            <div>Info about User:</div>
            <div>{JSON.stringify(user)}</div>
            <div>Friends:</div>
            <div>{JSON.stringify(friends.friends)}</div>
            <div>Groups:</div>
            <div>{JSON.stringify(groups.groups)}</div>
          </div>
          <hr/>
        </div>
      )
    });
  }

  return (
    <div>
      <div>
        {summary}
      </div>
    </div>
  );
}

export default App;

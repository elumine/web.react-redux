import * as React from 'react'
import { useGetProfileQuery } from './profile.api'
import { CircularProgress } from '@mui/material';

export default function Profile() {
  const { data, error, isLoading } = useGetProfileQuery();

  return (
    <div>
      <h1>Profile</h1>
      { isLoading && <CircularProgress /> }
      { (!isLoading && error) && <div>Error loading profile data.</div> }
      { (!isLoading && !error) && 
        <div>
          <div>Username: { data.username }</div>
          <div>First Name: { data.firstName }</div>
          <div>Last Name: { data.lastName }</div>
          <div>Email: { data.email }</div>
          <div>Gender: { data.gender }</div>
        </div>
      }
    </div>
)}
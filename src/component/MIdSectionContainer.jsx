import React from 'react'
import { NewteamComp } from './NewteamComp'
import SimpleBreadcrumbs from './SimpleBreadcrumbs'
import MembersComp from './MembersComp'

export function MIdSectionContainer() {
  return (
     <>
     <SimpleBreadcrumbs />
     <NewteamComp />
     <MembersComp />
     </>
  )
}

export default MIdSectionContainer


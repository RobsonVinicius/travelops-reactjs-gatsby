import React from 'react'
import { GiEarthAmerica } from 'react-icons/gi'
import { MdAirplanemodeActive } from 'react-icons/md'
import { MdTimer } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'

let iconEarth = {color: "#047bf1"};
let iconPlane = {color: "#f3a82e"};
let iconTimer = {color: "#f34f2e"};
let iconMoney = {color: "#3af576"};

export const StatsData = [
  {
    icon: (
      <GiEarthAmerica style={iconEarth}/>
    ),
    title: "Over 100 Destinations",
    desc: "Travel to over 100 unique places"
  },
  {
    icon: (<MdAirplanemodeActive style={iconPlane}/>),
    title: "1 Million Support",
    desc: "Over 1 million tips completed last year"
  },
  {
    icon: (<MdTimer style={iconTimer}/>),
    title: "Fastest Support",
    desc: "Access our supoort team 24/7"
  },
  {
    icon: (<FaMoneyCheck style={iconMoney} />),
    title: "Best Deals",
    desc: "We offer the best prices"
  }

]

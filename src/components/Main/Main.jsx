import React from 'react'
import './Main.css'

const data1 = [
  {icon:'https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png', title:'Using Abstract', desc:'Abstract lets you manage, version, and document your designs in one place.  '},
  {icon:'https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png', title:'Manage organizations, teams, and projects', desc:'Use Abstract organizations, teams, and projects to organize your people and your work.'},
  {icon:'https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png', title:'Authenticate to Abstract', desc:'Set up and configure SSO, SCIM, and Just-in-Time provisioning.'}
]

const data2 = [
  {icon:'https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png', title:'Manage your account  ', desc:'Configure your account settings, such as your email, profile details, and password.'},
  {icon:'https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png', title:'Manage billing', desc:'Change subscriptions and payment details.'},
  {icon:'https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png', title:'Abstract support', desc:'Get in touch with a human.'}
]

function Main() {
  return (
    <div className='main'>
        <div className='col'>
          {data1.map((item, index) => (
            <div className='col-in' key={index}>
                <div className='icon'><img src={item.icon} alt="k" /></div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
            </div>
          ))}
        </div>
        <div className='col'>
        {data2.map((item, index) => (
            <div className='col-in' key={index}>
                <div><img src={item.icon} alt="k" /></div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Main
"use client"
import dynamic from 'next/dynamic';
import { useState } from 'react';
import '../styles/globals.css'
import { useSwipeable } from "react-swipeable";

function Newsletter() {
    const [status, setStatus] = useState<string | null>(null)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const FORM_URL = `https://app.convertkit.com/forms/5007197/subscriptions`

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const data = new FormData(event.target as HTMLFormElement)

    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      })

      setEmail("")
      const json = await response.json()

      if (json.status === "success") {
        setStatus("SUCCESS")
        return
      }
    } catch (err) {
      setStatus("ERROR")
      console.log(err)
    }
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setEmail(value)
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setName(value)
  }
    

    return (
        <div className='newsletter-container'>
            <h3 className='newsletter-title'>Aboneaza-te pentu noutati</h3>
            {status === 'ERROR' &&
            <p>A aparut o eroare!</p>
            }

            {status === 'SUCCESS' &&
            <p>Multumim pentru abonare!</p>
            } 

            {status === null && (
          <form onSubmit={handleSubmit} className="form-container" method='POST'>
            <input
              aria-label="Your email address"
              name="email_address"
              placeholder="Email"
              required
              type="email"
              onChange={handleEmailChange}
              value={email}
            />
            <input type='submit' name='submit'>Aboneaza-te!</input>
          </form>
      )}
        </div>
    )
}

export default dynamic (() => Promise.resolve(Newsletter), {ssr:false});
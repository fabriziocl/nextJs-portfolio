"use client"
import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send"
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSONdata
    }

    const response = await fetch(endpoint, options)
    const resData = await response.json()
    console.log(resData)

    if (response.status === 200) {
      console.log('Message sent')
      setEmailSubmitted(true)
    } else {
      console.error('Error')
    }
  }

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2">
      </div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          {"Let's get in touch!"}
        </h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          {`I'm always interested about both front and backend development,
           AI driven development, finding solutions, 
           facing new challenges, and learning new technologies. 
           If you want to contact or just want to say hi, I'll try my best to get
           back to you`
          }
        </p>
        <div className="socials flex flex-row gap-2">
          <SocialIcon href="https://www.linkedin.com/in/fabrizio-castro-l%C3%B3pez-b949b2208/" network="linkedin" />
          <SocialIcon href="https://github.com/fabriziocl" network="github" />
          <SocialIcon href="https://stackoverflow.com/users/17583914/fabrizio" network='stackoverflow' />
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name='email'
              type="email"
              id='email'
              required
              placeholder='johndoe@proton.me'
              autoComplete='off'
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name='subject'
              type="text"
              id='subject'
              required
              placeholder='Hey there!'
              autoComplete='off'
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="I'm interested in talking with you!"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            type='submit'
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send message
          </button>
          {
            emailSubmitted && (
              <p className="text-green-600 text-sm mt-2">
                Email sent successfully
              </p>
            )
          }
        </form>
      </div>
    </section>
  )
}

export default EmailSection
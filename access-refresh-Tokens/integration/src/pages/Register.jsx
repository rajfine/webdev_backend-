import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.jsx'

const Register = () => {

  const { register, handleSubmit, onRegister} = useAuth()

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Register</h1>

        <form onSubmit={handleSubmit(onRegister)} style={styles.form}>
          <input
            type="text"
            placeholder="Name"
            {...register('name')}
            style={styles.input}
            onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.5)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
          />
          <input
            type="email"
            placeholder="Email"
            {...register('email')}
            style={styles.input}
            onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.5)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
          />
          <input
            type="password"
            placeholder="Password"
            {...register('password')}
            style={styles.input}
            onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.5)'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
          />
          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>

        <p style={styles.footerText}>
          Already have an account?{' '}
          <Link to="/" style={styles.link}>Login</Link>
        </p>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0a0a',
    padding: '20px',
    fontFamily: "'Hanken Grotesk', 'Inter', sans-serif",
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    background: 'rgba(26, 26, 26, 0.6)',
    backdropFilter: 'blur(40px)',
    WebkitBackdropFilter: 'blur(40px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    padding: '48px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  heading: {
    fontSize: '32px',
    fontWeight: '500',
    color: '#ffffff',
    letterSpacing: '-0.02em',
    margin: 0,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  input: {
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '12px 0',
    fontSize: '16px',
    color: '#ffffff',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    fontFamily: "'Hanken Grotesk', sans-serif",
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    backgroundColor: '#ffffff',
    color: '#0a0a0a',
    border: 'none',
    padding: '16px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    borderRadius: '4px',
    marginTop: '8px',
    transition: 'opacity 0.3s ease',
    fontFamily: "'Hanken Grotesk', sans-serif",
  },
  footerText: {
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: '500',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'rgba(196, 199, 200, 0.8)',
    margin: 0,
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '700',
  },
}

export default Register

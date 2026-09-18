import { useEffect, useRef, useState } from 'react'
import { faqs, contact } from '../config'

const GREETING =
  "Hi! I'm a quick-answer helper for Rare Strands — not a live person. " +
  'Ask about hair, deposits, or booking, or pick a question below.'

const FALLBACK =
  "I don't have an answer for that yet. Try one of the questions below, " +
  `or email us directly at ${contact.email}.`

function findAnswer(text) {
  const q = text.toLowerCase()
  const hit = faqs.find((faq) => faq.keywords.some((kw) => q.includes(kw)))
  return hit ? hit.answer : FALLBACK
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ from: 'bot', text: GREETING }])
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, open])

  function ask(text) {
    if (!text.trim()) return
    setMessages((m) => [...m, { from: 'user', text }, { from: 'bot', text: findAnswer(text) }])
  }

  function handleSubmit(e) {
    e.preventDefault()
    ask(input)
    setInput('')
  }

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-panel" role="dialog" aria-label="Ask Rare Strands">
          <div className="chat-panel-header">
            <span>Ask Rare Strands</span>
            <button
              type="button"
              className="chat-close"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
          </div>

          <div className="chat-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <p key={i} className={`chat-bubble chat-bubble--${m.from}`}>
                {m.text}
              </p>
            ))}
          </div>

          <div className="chat-quick-replies">
            {faqs.map((faq) => (
              <button
                type="button"
                key={faq.question}
                className="chat-quick-reply"
                onClick={() => ask(faq.question)}
              >
                {faq.question}
              </button>
            ))}
          </div>

          <form className="chat-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              aria-label="Type your question"
            />
            <button type="submit" className="chat-send" aria-label="Send">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="chat-toggle"
        aria-label={open ? 'Close chat' : 'Ask a question'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4 4h16v12H9l-5 4V4Z" />
          </svg>
        )}
      </button>
    </div>
  )
}

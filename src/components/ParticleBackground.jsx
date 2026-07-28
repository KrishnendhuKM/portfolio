import { useEffect, useRef } from 'react'

function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let animationId
    let particles = []

    function resizeCanvas() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    function createParticles() {
      // Increased density: was /15000, now /8000 = roughly double the dots
      const count = Math.floor((canvas.width * canvas.height) / 8000)
      particles = []
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.6, // faster than before (was 0.3)
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 1.5 + 1, // varied dot sizes (1 to 2.5px)
          pulsePhase: Math.random() * Math.PI * 2, // each dot pulses at a different point in time
        })
      }
    }

    function animate(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Gentle pulsing glow brightness using a sine wave over time
        const pulse = Math.sin(time * 0.001 + p.pulsePhase) * 0.3 + 0.7 // ranges ~0.4 to 1.0

        ctx.save()
        ctx.shadowBlur = 8
        ctx.shadowColor = 'rgba(245, 245, 245, 0.8)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(199, 199, 199, ${pulse})`
        ctx.fill()
        ctx.restore()
      })

      // Connection lines (same logic, slightly longer range since denser now)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 130) {
            const opacity = 1 - distance / 130
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(140, 140, 140, ${opacity * 0.35})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animationId = requestAnimationFrame(animate)

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0"
    />
  )
}

export default ParticleBackground
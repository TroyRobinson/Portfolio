import * as React from 'react'
import '../public/globals.css'
import { FlexCol, FlexRow } from './utils'
import { useSpring, animated } from 'react-spring'
import {
  UserCircleIcon,
  CodeIcon,
  MailIcon,
  BriefcaseIcon,
  LightningBoltIcon,
  GlobeIcon,
} from '@heroicons/react/outline'

const Section = ({ icon: Icon, title, children }) => (
  <FlexCol
    style={{
      padding: '2rem',
      gap: '1rem',
      maxWidth: '800px',
      width: '100%',
    }}
  >
    <FlexRow
      style={{
        alignItems: 'center',
        gap: '0.5rem',
      }}
    >
      <Icon style={{ width: '1.5rem', height: '1.5rem' }} />
      <h2 style={{ margin: 0, fontSize: '1.5rem' }}>
        {title}
      </h2>
    </FlexRow>
    {children}
  </FlexCol>
)

export var App = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 100, friction: 20 },
  })

  return (
    <FlexCol
      style={{
        width: '100%',
        minHeight: '100vh',
        background: 'white',
        alignItems: 'center',
        color: '#1a1a1a',
      }}
    >
      <animated.div style={fadeIn}>
        <FlexCol
          style={{
            padding: '4rem 2rem',
            alignItems: 'center',
            textAlign: 'center',
            gap: 22,
            left: 0,
            top: 0,
          }}
        >
          <UserCircleIcon
            style={{
              width: '4rem',
              height: '4rem',
              justifyContent: 'space-between',
            }}
          />
          <h1 style={{ margin: 0, fontSize: '2.5rem' }}>
            Robinson Software
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#666' }}>
            Web app product, design, & development
          </p>
        </FlexCol>
        <Section
          icon={BriefcaseIcon}
          title='Troy Robinson'
          style={{ left: 26, top: -59 }}
        >
          <p style={{ lineHeight: 1.6, margin: 0 }}>
            Passionate developer with expertise in building
            modern web applications. Focused on creating
            elegant solutions to complex problems.
          </p>
        </Section>
        <Section icon={LightningBoltIcon} title='Skills'>
          <FlexRow
            style={{ gap: '1rem', flexWrap: 'wrap' }}
          >
            {['React', 'Figma', 'JS', 'AWS', 'GraphQL'].map(
              (skill) => (
                <div
                  key={skill}
                  style={{
                    padding: '0.5rem 1rem',
                    background: '#f3f4f6',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                  }}
                >
                  {skill}
                </div>
              ),
            )}
          </FlexRow>
        </Section>
        <Section icon={CodeIcon} title='Projects'>
          <FlexCol style={{ gap: '1rem' }}>
            {[
              {
                name: 'America Amplified',
                desc: 'A revolutionary web application',
              },
              {
                name: 'Project B',
                desc: 'Mobile-first e-commerce platform',
              },
            ].map((project) => (
              <div
                key={project.name}
                style={{
                  padding: '1rem',
                  background: '#f3f4f6',
                  borderRadius: '0.5rem',
                }}
              >
                <h3
                  style={{
                    margin: '0 0 0.5rem',
                    height: 'max-content',
                  }}
                >
                  {project.name}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: '#666',
                    height: 'max-content',
                  }}
                >
                  {project.desc}
                </p>
              </div>
            ))}
          </FlexCol>
        </Section>
        <Section icon={MailIcon} title='Contact'>
          <FlexRow
            style={{
              gap: '1rem',
              justifyContent: 'center',
            }}
          >
            <a
              href='mailto:john@example.com'
              style={{
                color: '#1a1a1a',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <MailIcon
                style={{
                  width: '1.25rem',
                  height: '1.25rem',
                }}
              />
              Email
            </a>
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              style={{
                color: '#1a1a1a',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <GlobeIcon
                style={{
                  width: '1.25rem',
                  height: '1.25rem',
                }}
              />
              GitHub
            </a>
          </FlexRow>
        </Section>
      </animated.div>
    </FlexCol>
  )
}

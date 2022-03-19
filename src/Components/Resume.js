import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'
import SmallTitle from '../Components/SmallTitle'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from '../Components/ResumeItem'

function Resume() {
  const briefcase = <BusinessCenterIcon />
  const school = <SchoolIcon />
  return (
    <ResumeStyled>
      <Title title={'Resume'} span={'resume'} />
      <InnerLayout>
        <div className='small-title'>
          <SmallTitle icon={briefcase} title={'Working Experience'} />
        </div>
        <div className='resume-content'>
          <ResumeItem
            year={'2019 - Present'}
            title={'Self Taught Full Stack Developer'}
            subTitle={'At Home'}
            text={''}
          />
        </div>
        <div className='small-title u-small-title-margin'>
          <SmallTitle icon={school} title={'Educational Qualifications'} />
        </div>
        <div className='resume-content '>
          <ResumeItem
            year={'2015 - 2019'}
            title={'Computer Science & Engineering'}
            subTitle={'Daffodil International University'}
            text={'B.Sc. in Computer Science and Engineering'}
          />
          <ResumeItem
            year={'2012 - 2014'}
            title={'Higher Secondary Certificate'}
            subTitle={'Dhaka College'}
            text={'Science'}
          />
          <ResumeItem
            year={'2002 - 2012'}
            title={'Jatrabari Ideal High School'}
            subTitle={'ABC School'}
            text={'Science'}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  )
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`
export default Resume

import React from 'react'
import styled from 'styled-components'
import resume from '../img/avatar.jpg'
import PrimaryButton from './PrimaryButton'

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className='left-content'>
        <img src={resume} alt='' />
      </div>
      <div className='right-content'>
        <h4>
          I am <span>Akash Ahmed</span>
        </h4>
        <p className='paragraph'>
          Currently, I am seeking a challenging career with a progressive
          organization where I will get the opportunity to utilize my skills &
          abilities.
        </p>
        <div className='about-info'>
          <div className='info-title'>
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className='info'>
            <p>: Akash Ahmed</p>
            <p>: 26</p>
            <p>: Bangladeshi </p>
            <p>: English, Bangla </p>
            <p>: Dhaka, Bangladesh</p>
            <p>: Freelance</p>
          </div>
        </div>
        <PrimaryButton title={'Download Cv'} />
      </div>
    </ImageSectionStyled>
  )
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`
export default ImageSection

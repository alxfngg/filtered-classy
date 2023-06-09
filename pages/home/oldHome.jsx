/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  A, H3, H2, H1, B1, H4,
} from '../../components/ui/typography';
import CourseTitleCardHome from '../../components/CourseTitleCardHome';
import DataBox from '../../components/home/DataBox';
import Table from '../../components/home/Table';
import styles from '../../styles/components/HomePage.module.css';
import ProfileModal from '../../components/home/ProfileModal';
import CurrentModal from '../../components/home/CurrentModal';
import ShoppingModal from '../../components/home/ShoppingModal';
import CompletedModal from '../../components/home/CompletedModal';

const allCourses = [
  {
    courseNumber: 'COSC 52',
    courseName: 'Full Stack Web Development',
    term: '21F',
    quality: '4.0',
    difficulty: '3.0 (3)',
    hrsPerWeek: '3.0 (3)',
    median: 'A-',
    reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
    distribs: ['TLA', 'NW'],
    timeBlock: '9L',
    location: 'ECSC202',
  },
  {
    courseNumber: 'COSC 98.01',
    courseName: 'Senior Design and Implementation I',
    term: '19F',
    quality: '5.0',
    difficulty: '4.0 (3)',
    hrsPerWeek: '3.0 (4)',
    median: 'A',
    reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
    distribs: ['TLA', 'NW'],
    timeBlock: '10',
    location: 'LSC101',
  },
  {
    courseNumber: 'COSC 98.02',
    courseName: 'Senior Design and Implementation II',
    term: '19W',
    quality: '5.0',
    difficulty: '5.0 (3)',
    hrsPerWeek: '3.0 (3)',
    median: 'A',
    reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
    distribs: ['TLA', 'NW'],
    timeBlock: '2A',
    location: 'ECSC101',
  },
  {
    courseNumber: 'COSC 98.02',
    courseName: 'Senior Design and Implementation II',
    term: '19W',
    quality: '5.0',
    difficulty: '5.0 (3)',
    hrsPerWeek: '3.0 (3)',
    median: 'A',
    reviews: ['This class was awesome', 'Tim is great', 'Natalie is amazing'],
    distribs: ['TLA', 'NW'],
    timeBlock: '2A',
    location: 'ECSC101',
  },
];

const cardColors = [
  { pastel: '#FCF0E3', dark: '#BA7D37' },
  { pastel: '#EBF9FA', dark: '#5B8A8D' },
  { pastel: '#EFFAEB', dark: '#75946A' },
  { pastel: '#EFE7FA', dark: '#7E5DAC' },
  { pastel: '#FAEBF6', dark: '#AE5E99' },
  { pastel: '#F9F3FC', dark: '#8E5BA8' },
];

function HomePage() {
  const pic = 'https://faculty-directory.dartmouth.edu/sites/faculty_directory.prod/files/styles/profile_portrait/public/profile_square.jpg?itok=lVqJtQt6';
  const [profileModalIsOpen, setProfileModalIsOpen] = useState(false);
  const [currentModalIsOpen, setCurrentModalIsOpen] = useState(false);
  const [shoppingModalIsOpen, setShoppingModalIsOpen] = useState(false);
  const [completedModalIsOpen, setCompletedModalIsOpen] = useState(false);
  const progress = 66;
  return (
    <div style={{ padding: '20px 80px 50px 275px' }}>
      <ProfileModal
        isOpen={profileModalIsOpen}
        setIsOpen={setProfileModalIsOpen}
        pic={pic}
      />
      <ShoppingModal
        isOpen={shoppingModalIsOpen}
        setIsOpen={setShoppingModalIsOpen}
      />
      <CurrentModal
        isOpen={currentModalIsOpen}
        setIsOpen={setCurrentModalIsOpen}
      />
      <CompletedModal
        isOpen={completedModalIsOpen}
        setIsOpen={setCompletedModalIsOpen}
      />
      <div className={styles.verticalContainer} style={{ gap: '50px' }}>
        <div style={{
          display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '35px',
        }}
        >
          <img className={styles.pic} src={pic} alt="Tim" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <A onClick={() => setProfileModalIsOpen(true)}>Edit Profile</A>
            <H1>Tim Tregubov</H1>
            <B1 color="var(--darkest-grey)" style={{ marginTop: '5px' }}>Computer Science Major • Economics Minor </B1>
          </div>
        </div>

        <div className={styles.verticalContainer}>
          <div className={styles.horizontalContainer} style={{ height: '350px' }}>
            <div className={styles.box} style={{ backgroundColor: 'var(--navy)', width: '880px', minWidth: '880px' }}>
              <div className={styles.header}>
                <H3 color="var(--white)">Current Courses</H3>
                <A color="var(--white)" onClick={() => setCurrentModalIsOpen(true)}>Edit</A>
              </div>
              <div style={{
                display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'flex-start', gap: '40px', overflow: 'scroll', padding: '0 30px',
              }}
              >
                {allCourses.map((course, i) => (
                  <CourseTitleCardHome
                    key={course.courseName}
                    course={course}
                    color={cardColors[i % cardColors.length]}
                  />
                ))}
              </div>
            </div>

            <div className={styles.verticalContainer}>
              <DataBox width="165px" height="130px" text="Friends" data="74" pastelColor="var(--pastel-pink)" darkColor="var(--dark-pink) " />
              <DataBox width="165px" height="200px" text="Waitlists Joined" data="74" pastelColor="var(--pastel-violet)" darkColor="var(--dark-violet) " />
            </div>

          </div>

          <div className={styles.horizontalContainer}>
            <div className={styles.verticalContainer} style={{ width: '715px' }}>
              <div className={styles.box} style={{ backgroundColor: 'var(--lightest-grey)', height: '320px', minWidth: '615px' }}>
                <div className={styles.header}>
                  <H3>Shopping Cart for Next Term</H3>
                  <A onClick={() => setShoppingModalIsOpen(true)}>Edit</A>
                </div>

                <Table />

              </div>

              <div className={styles.box} style={{ backgroundColor: 'var(--lightest-grey)', height: '320px', minWidth: '615px' }}>
                <div className={styles.header}>
                  <H3>Completed Courses</H3>
                  <A onClick={() => setCompletedModalIsOpen(true)}>Edit</A>
                </div>

                <Table />
              </div>

            </div>

            <div className={styles.verticalContainer}>
              <div
                className={styles.box}
                style={{
                  backgroundColor: 'var(--lightest-grey)', minWidth: '330px', width: '330px', paddingBottom: '35px',
                }}
              >
                <div className={styles.header}>
                  <H3>Your Progress</H3>
                </div>
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
                }}
                >
                  <div style={{ width: 200, height: 200, marginTop: '20px' }}>
                    <CircularProgressbarWithChildren
                      value={progress}
                      styles={buildStyles({

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Colors
                        pathColor: 'var(--dark-green)',
                        trailColor: 'var(--light-grey)',
                      })}
                      strokeWidth="18"
                    >
                      <H2>
                        {progress}
                        %
                      </H2>
                    </CircularProgressbarWithChildren>
                  </div>

                  <div style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px',
                  }}
                  >
                    <H4>Degree</H4>
                    <B1 color="var(--dark-grey)">22/35 Courses Completed</B1>
                  </div>

                </div>
              </div>

              <div className={styles.horizontalContainer} style={{ gap: '20px' }}>
                <DataBox width="175px" height="180px" text="Departments Explored" data="74" pastelColor="var(--pastel-orange)" darkColor="var(--dark-orange) " />
                <DataBox width="135px" height="180px" text="9Ls Endured" data="74" pastelColor="var(--pastel-green)" darkColor="var(--dark-green) " />
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default HomePage;

import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

const Courses = ({ data }) => {
  const sortedCourses = data.sort((a, b) => {
    const universityComparison = b.university.localeCompare(a.university);
    if (universityComparison !== 0) {
      return universityComparison;
    }
    return a.number.localeCompare(b.number);
  });

  return (
    <div className="courses">
      <div className="link-to" id="courses" />
      <div className="title">
        <h3>Publication</h3>
      </div>
      <ul className="course-list">
        {sortedCourses.map((course, idx) => (
          <Course
            data={course}
            key={course.title}
            last={idx === sortedCourses.length - 1}
          />
        ))}
      </ul>
    </div>
  );
};

Courses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    university: PropTypes.string,
  })),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;

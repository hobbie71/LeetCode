SELECT
st.student_id,
st.student_name,
su.subject_name,
COUNT(e.student_id) AS attended_exams
FROM students st
CROSS JOIN subjects su
LEFT JOIN examinations e
    ON st.student_id = e.student_id
    AND e.subject_name = su.subject_name
GROUP BY su.subject_name, st.student_id
ORDER BY st.student_id ASC, su.subject_name ASC
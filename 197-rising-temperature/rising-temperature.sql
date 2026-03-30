SELECT today.id as Id
FROM weather today
CROSS JOIN weather yesterday
WHERE DATEDIFF(today.recordDate, yesterday.recordDate) = 1
AND today.temperature > yesterday.temperature
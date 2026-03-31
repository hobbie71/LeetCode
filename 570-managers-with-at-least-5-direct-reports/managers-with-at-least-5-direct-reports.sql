SELECT e.name
FROM employee AS e
INNER JOIN employee AS manager
    ON e.id = manager.managerId
GROUP BY manager.managerId
HAVING COUNT(manager.managerId) >= 5
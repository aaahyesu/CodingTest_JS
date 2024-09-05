-- 코드를 입력하세요
SELECT WAREHOUSE_ID,WAREHOUSE_NAME,ADDRESS,IFNULL(FREEZER_YN, 'N') FROM FOOD_WAREHOUSE WHERE WAREHOUSE_NAME LIKE '%경기%' ORDER BY WAREHOUSE_ID;

# SELECT WAREHOUSE_ID, WAREHOUSE_NAME, ADDRESS, FREEZER_YN
# FROM FOOD_WAREHOUSE
# WHERE FREEZER_YN IS NOT NULL AND WAREHOUSE_NAME LIKE '%경기%'
# UNION ALL
# SELECT WAREHOUSE_ID, WAREHOUSE_NAME, ADDRESS, 'N'
# FROM FOOD_WAREHOUSE
# WHERE FREEZER_YN IS NULL AND WAREHOUSE_NAME LIKE '%경기%'
# ORDER BY WAREHOUSE_ID

# SELECT WAREHOUSE_ID, WAREHOUSE_NAME, ADDRESS, COALESCE(FREEZER_YN, 'N')
# FROM FOOD_WAREHOUSE
# WHERE WAREHOUSE_NAME LIKE '%경기%'
# ORDER BY WAREHOUSE_ID
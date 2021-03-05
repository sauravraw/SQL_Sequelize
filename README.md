# SQL_Sequelize

steps:
1. Open SQL WORKBENCH
2. `create Database dummyDatabase;`
3. `use dummyDatabase`
4. Create table using `create table dummytable(id int not null auto_increment, first_name varchar(255) not null, last_name varchar(255) not null, primary key (id));`
Open postman
1. Get All Data present in DATABASE `GET` method and in url `http://localhost:3000/`
2. ![Screenshot from 2021-03-05 19-29-18](https://user-images.githubusercontent.com/73871061/110125582-7644bb80-7de9-11eb-95a7-b0515f7d2dd5.png)

3. Get Single Data present in DATABASE use `GET` method and in url `http://localhost:3000/:id`
4. ![Screenshot from 2021-03-05 19-30-02](https://user-images.githubusercontent.com/73871061/110125554-6e851700-7de9-11eb-9fc4-2c93a4ba0161.png)

5. To post data select `POST` method `http://localhost:3000/` select x-www-form-urlencoded in body
6. ![Screenshot from 2021-03-05 19-28-30](https://user-images.githubusercontent.com/73871061/110125520-662cdc00-7de9-11eb-8b2b-4fbe6cba573b.png)

7. To update data select id which you want to update with `PUT` method `http://localhost:3000/:id` select x-www-form-urlencoded in body
8. ![Screenshot from 2021-03-05 19-29-03](https://user-images.githubusercontent.com/73871061/110125419-4b5a6780-7de9-11eb-8420-877a6a95802e.png)

9.  To delete Data select id which you want to delete with `DELETE` method and in url `http://localhost:3000/:id`
10. ![Screenshot from 2021-03-05 19-29-38](https://user-images.githubusercontent.com/73871061/110125399-4695b380-7de9-11eb-8643-5389708ee1bf.png)

 


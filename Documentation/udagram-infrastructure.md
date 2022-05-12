# Udagram-Infrastructure
![image info](./Documentation/Udagram-Architecture.jpg)
## Usage of the code
1. The user will access the URL of the application.
2. The application get the input from user if it to register or login 
3. If user request to register , the registeration form will appear to complete user information then after registration , the user will be login.So the user can create post with picture attachment
4. during this operation authentication applied for user password 
5. The Aws S3 Buckets host udagram-Frontend 
6. The Aws EC2 hosting udagram-backend fetch the data from user
7. The Aws RDS hosting postgres which save the fetched data


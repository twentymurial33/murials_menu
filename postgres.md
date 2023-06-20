`sudo apt-get update`
`sudo apt-get install postgresql-14 postgresql-contrib`
`sudo -i -u postgres psql`
`CREATE USER murial WITH PASSWORD 'password';`
`CREATE DATABASE testdb2 OWNER murial;`
`\q`
`sudo ufw status`
`sudo ufw allow ssh`
`sudo ufw allow 22/tcp`
`sudo ufw allow 'Nginx Full'`
`sudo ufw enable`
`sudo ufw allow from 0.0.0.0/0 to any port 5432`
`sudo ufw allow from 0.0.0.0/0 to any port 80`
`cd /etc/postgresql/14/main`
`sudo nano pg_hba.conf`
`host    testdb2  murial      public_ip_address/32       md5`
`hostnossl all all 0.0.0.0/0 md5`
`sudo nano postgresql.conf`
`listen_addresses = '*'`
`sudo systemctl restart postgresql`
`sudo systemctl status postgresql`
`Update .env` 
`npm run deploy`
`npx prisma migrate deploy`

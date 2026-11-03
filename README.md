# Junior DevOps Assignment
### Node.js Application Deployment using PM2, Nginx, Jenkins & Cloudflare Tunnel

## 1. Project Overview

This project demonstrates the deployment of a Node.js application on a local Ubuntu system using PM2 and Nginx.

Jenkins is integrated with the GitHub repository to implement a basic CI/CD pipeline for automated application deployment.

The application is made publicly accessible through a secure HTTPS URL using Cloudflare Tunnel.


## 2. Project Objectives

- Deploy a Node.js application on Ubuntu Linux.
- Manage the application process using PM2.
- Configure Nginx as a reverse proxy.
- Implement CI/CD using Jenkins and GitHub.
- Provide public HTTPS access using Cloudflare Tunnel.
- Monitor application status, logs and server resources.

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| Ubuntu Linux | Operating System |
| Node.js | Application Runtime |
| PM2 | Process Management |
| Nginx | Reverse Proxy |
| Jenkins | CI/CD Automation |
| Git | Version Control |
| GitHub | Source Code Repository |
| Cloudflare Tunnel | Public HTTPS Access |

## 4. Project Architecture

```text
              Developer
                  |
                  v
             GitHub Repo
                  |
                  v
             Jenkins CI/CD
                  |
                  v
             Ubuntu System
                  |
          +-------+-------+
          |               |
          v               v
        PM2             Nginx
          |               |
          v               v
    Node.js App <---- Port 3000
                          |
                          v
                   Cloudflare Tunnel
                          |
                          v
                    Public HTTPS
                          |
                          v
                       Browser
```

## 5. GitHub Repository

**Repository Name:** Junior-devops-assignment

**GitHub URL:**

https://github.com/dhokareruchita20/Junior-devops-assignment

## 6. Project Structure

```text
Junior-devops-assignment/
│
├── app.js
├── package.json
├── ecosystem.config.js
├── Jenkinsfile
├── README.md
│
└── nginx/
    └── default
```

### File Description

- `app.js` - Main Node.js application.
- `package.json` - Project dependencies and configuration.
- `ecosystem.config.js` - PM2 process configuration.
- `Jenkinsfile` - Jenkins pipeline definition.
- `nginx/default` - Nginx reverse proxy configuration.
- `README.md` - Project documentation.

## 7. Application Deployment on Ubuntu
<img width="965" height="765" alt="image" src="https://github.com/user-attachments/assets/70730e76-e74e-4c31-b67f-c5a2bf9cab85" />
<img width="1600" height="1205" alt="image" src="https://github.com/user-attachments/assets/a6944da4-de4e-4040-88bf-fae904c471c2" />


### Step 1: Update Ubuntu

```bash
sudo apt update
sudo apt upgrade -y
```

### Step 2: Install Node.js and npm and git

Verify installation:

```bash
sudo apt install git -y
git --version
node -v
npm -v
```
### install pm2
```bash
sudo npm install -g pm2
pm2 -v
```
### Step 3: Clone GitHub Repository

```bash
git clone https://github.com/dhokareruchita20/Junior-devops-assignment.git

cd Junior-devops-assignment
```

### Step 4: Install Dependencies

```bash
npm install
```

### Step 5: Start Application Using PM2

```bash
pm2 start ecosystem.config.js
```

Check application status:

```bash
pm2 status
```
Application test
```bash
Application test कर
curl http://localhost:3000
```
<img width="1280" height="242" alt="image" src="https://github.com/user-attachments/assets/8f68fe74-d724-4845-ab57-fe07c831d2a2" />


View application logs:

```bash
pm2 logs
```

Save PM2 process list:

```bash
pm2 save
```

## 8. Nginx Reverse Proxy Configuration

Nginx is configured as a reverse proxy to forward incoming requests to the Node.js application running on port 3000.

### Nginx install

```bash
sudo apt update
sudo apt install nginx -y
```

### Enable and Test Configuration
copy Nginx configuration 
```bash
sudo cp nginx/default /etc/nginx/sites-available/default
```
Nginx configuration test 
```bash
sudo nginx -t
```
```bash
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl status nginx
```
Test the application through Nginx:

```bash
curl http://localhost
```

## 9. CI/CD Pipeline Using Jenkins

Jenkins is integrated with the GitHub repository to automate the application deployment process.
```bash
# 1. Update Ubuntu packages
sudo apt update
sudo apt upgrade -y

# 2. Install Java 21
sudo apt install fontconfig openjdk-21-jre -y

# 3. Verify Java installation
java -version

# 4. Add Jenkins repository key
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
https://pkg.jenkins.io/debian-stable/jenkins.io-2026.key

# 5. Add Jenkins repository
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null

# 6. Update package list
sudo apt update

# 7. Install Jenkins
sudo apt install jenkins -y

# 8. Start Jenkins
sudo systemctl start jenkins

# 9. Enable Jenkins on system boot
sudo systemctl enable jenkins

# 10. Check Jenkins status
sudo systemctl status jenkins

# 11. Get initial admin password
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

### Pipeline Configuration

- Source Code Management: Git
- Repository: GitHub
- Pipeline Script: Jenkinsfile
- Branch: main

### GitHub Repository

https://github.com/dhokareruchita20/Junior-devops-assignment
# open jenkins
```bash
http://localhost:8080
```
## 10. Public HTTPS Access Using Cloudflare Tunnel

Cloudflare Tunnel is used to expose the locally hosted Node.js application to the internet securely.

The tunnel forwards public HTTPS requests to the local Nginx server.

### Tunnel Command

```bash
cloudflared tunnel --url http://localhost:80
```

Cloudflare generates a public HTTPS URL.

**Public Application URL:**

[https://specialty-room-gave-over.trycloudflare.com]
<img width="562" height="277" alt="image" src="https://github.com/user-attachments/assets/a0381e0e-aac6-4cce-a5f8-8020656e1970" />


Note: Cloudflare Quick Tunnel is intended for testing and demonstration. Its URL is temporary and may change when the tunnel is restarted. The tunnel must remain running during the demonstration.

## 11. Application Endpoints

| Endpoint | Description |
|---|---|
| `/` | Main application endpoint |
| `/health` | Application health check endpoint |

## 12. Basic Monitoring

Application and server resource usage are monitored using PM2 and Linux commands.

### PM2 Monitoring

Check application status:

```bash
pm2 status
```

Check application logs:

```bash
pm2 logs
```

Monitor application resources:

```bash
pm2 monit
```

### Linux Server Monitoring

Check CPU and running processes:

```bash
top
```

Check memory usage:

```bash
free -h
```

Check disk usage:

```bash
df -h
```

Check system uptime:

```bash
uptime
```

Check Nginx service:

```bash
sudo systemctl status nginx
```

Check Jenkins service:

```bash
sudo systemctl status jenkins
```

## 13. Screenshots

The following screenshots demonstrate the project implementation.

### 1. Working Node.js Application
![Application Screenshot](screenshots/01-application.png)

### 2. PM2 Application Status
![PM2 Status](screenshots/02-pm2-status.png)

### 3. Nginx Reverse Proxy
![Nginx Configuration](screenshots/03-nginx.png)

### 4. Jenkins CI/CD Pipeline
![Jenkins Pipeline](screenshots/04-jenkins.png)

### 5. Public HTTPS Application
![HTTPS Application](screenshots/05-https.png)

### 6. Server Resource Monitoring
![Server Monitoring](screenshots/06-monitoring.png)



**GitHub:** https://github.com/dhokareruchita20

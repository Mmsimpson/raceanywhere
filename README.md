# RaceAnywhere
#### A website creating an competive social network platform where users can share and post POV GoPro videos of their Kayaking adventures and compete against other users.

**Table of Contents:**
* <a href="#core-features">**Core Features**</a>
* <a href="#challenges">**Challenges**</a>


<div align="center">
<img src="client/public/images/mainimg.png" height="150px">
</div>

I first heard the concept of Race Anywhere from my college roommate Jack Orr. As he travelled from state to state kayaking, he began to realize the seclusion of whitewater sports. Thus he thought of Race Anywhere. A website where avid fans of whitewater sports can post their videos and times of their runs and compare them to other users. The interaction between users neutralizes the seclusion and brings the whitewater community closer.

#### This was a individual project developed by:
* Marshall Simpson (myself)

## Core Features:

(Currently)

##### A persistent database that allows users to register and login to the Race Anywhere server and upload videos with it's corresponding information.

##### Page where users can see the most recently published videos from any registered user.

##### Users can register and if they are logged in they can submit videos with corresponding information.

## Challenges:

Throughout this project I ran into several challenges and bugs that had impeded my progress to complete full functionality. Some of these challenges include...

1. AWS Deployment and Nginx file upload limits.
2. JSON Webtokens for user database.

#### AWS Deployment/Nginx upload limits:

AWS was by far the most difficult aspect of my project. Creating the server was confusing but the most challenging part for me was fixing bugs caused by deployment. Having to adjust my locally hosted code to fix deployment errors was one of my largest issues. The other issue was the set Nginx file upload limits. To solve this error I changed the file limits to be much larger than the given limit however I learned that there are two seperate areas where you have to change the limits.

#### JSON Webtokens:

In this project I used JSON webtokens to encrypt user information which was stored in local storage and send that information to my backend server.  Once the token was received by the backend - it was decrypted and verified with a database query.  The entire process took some trial and error, but after a day of hard work I had a good understanding of the JSON Webtoken concept.  

### Conclusion:

Currently I can positively say that I am still working on full functionality, Race Anywhere can most assuredly influence the social and competitive nature of whitewater sports. Race Anywhere will recieve my full attention in my future development and I aim to have a more functional and polished version deployed in the near future.




 # Video-hosting
 ## Written with React as a frontend side and Node+Express as a backend side
 
 Preview link : TBD soon...
 =====

 ### Tech stack:
 - React, React-Router, Styled-components;
 - Node.js, Express, JWT for authorization, cookies for saving auth token;
 - MongoDB for storing user data
 - Firebase for Google Auth and as a cloud storage for videos and images;

 #### 📝 **TODO**:
🔷 **Frontend:**
 - ✅ Make Card component
 - ✅ Add single Video Page. Need to create:
 - - ✅ Video Info Section
 - - ✅ Comments Section:
 - - - ✅ Create-comment-form component
 - - - ✅ Single comment component
 -  - ✅ Recomendation Sidebar
 - ✅ Add Login page
 - ✅ Refactor Card styles using Props
 - ✅ Add Burger component
 - ✅ Make Nav Sidebar absolute with slide effect
 - ⬜ Be good to do:
 - - ⬜ Add Overlay when Sidebar is open
 - - ⬜ Prevent outside click and scroll Sidebar is open
 - - ⬜ Make Main page with Cards using Grid-flow instead of Flexbox
 - ⬜ Reduce styles by creating reusable UI-Components (need to determine)

🔶 **Backend:**
 - ✅ Make basic config and routes setup
 - ✅ Make models:
 -  - ✅ VideoModel
 -  - ✅ UserModel
 -  - ✅ CommentModel
 -  ✅ Authentication with JWT and cookies
 -  ✅ Auth verification middleware
 -  ⬜✅ Error handler middleware
 -  ✅ Make controllers:
  -  - ✅ Video
 -  - ✅ User
 -  - ✅ Auth
 -  - ✅ Comment
 - ✅ Implement next functionality:
- #### 🟡 Auth:
 - - ✅ SignUp
 - - ✅ SignIn
 - - ✅ Google Auth
 - - ✅ Logout
 - #### 🟡 User:
 - - ✅ Get User
 - - ✅ Create User
 - - ✅ Subscribe/Unsubscribe on User
 - #### 🟡 Video:
 - - ✅ Create (Add new) video
 - - ⬜ Edit/Update video
 - - ⬜ Delete video
 - - ✅ Get Video by ID
 - - ✅ Get Video by subsriptions
 - - ✅ Get Random videos
 - - ✅ Get Hot/Popular videos
 - - ✅ Get video by tags
 - - ✅ Like/Dislike video
 - - ✅ Search video
 - - ⬜ Incresase view count
 - #### 🟡 Comment:
 - - ✅ Get comments for current video
 - - ⬜ Add comment
 - - ⬜ Edit comment
 - - ⬜ Delete comment

⭕ **General:**
 - ✅ Connect Redux for: 
 - - ✅ User data storage
 - - ✅ Video data storage
 - ⬜ 🔴  Handle signin/login errors with toastify
 - ⬜ 🔴  Handle upload videos with toastify
  
<hr/>

🔷 **Routes to handle with:** <br/>
### Base route: ***'localhost:{port}/api/v1'***
🟡 Auth route >>> **'*/auth'**<br/>
🟡 User route >>> **'*/users'**<br/>
🟡 Video route >>>  **'*/videos'**<br/>
🟡 Comment route >>>  **'*/comments'**<br/>
<hr/>

marks: ✅ ⬜ 🔘 🔻 ❌ ✔️ 🔷 🔶 🔺 ⚪🔘 🔴 ☑️ ➖ ➕

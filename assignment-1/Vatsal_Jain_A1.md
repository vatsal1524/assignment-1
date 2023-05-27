# Assignment 1

- _Date Created_: 27 005 2023
- _Last Modification Date_: 27 005 2023
- _Git URL_: https://git.cs.dal.ca/vatsal/csci-5709-assignments/-/tree/main/assignment-1/front-end

## Authors

- [Vatsal Jain](vt981557@dal.ca)

### Testing

### Briefly explain the process you went through to test your work.

I have deployed the front-end application made using React on Netlfiy to test my work. For now, I have created a basic design of the Event Listing page and implemented the search feature based on the title of the event.

### And coding style tests

I have used "create-react-app" command to create the boilerplate code for the React application and Bootstrap to make the web page user-friendly and responsive.

## Deployment

i have deployed my work on Netlify using a Github Repository. Here is the link of deployed webpage: https://phenomenal-cactus-b2f7c5.netlify.app/

## Built With

- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) - The front-end toolkit used
- [React](https://react.dev/) - Front-end framework used

## Sources Used

I have used Bootstrap navbar documentatiuon as a reference for craeting the navbar of my webpage: https://getbootstrap.com/docs/4.0/components/navbar/

I have used Bootstrap documentation as a reference to add Bootstrap classes to make the page responsive and user-friendly: https://getbootstrap.com/docs/4.0/getting-started/introduction/

I used the official documenmtation of React to get myself acquainted with the basics: https://react.dev/learn\

### eventListing.jsx

_Lines 91 - 103_

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-brand">Event Management</button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <button class="nav-item nav-link active">
                Home <span class="sr-only"></span>
              </button>
              <button class="nav-item nav-link">Notifications</button>
              <button class="nav-item nav-link">Help</button>
              <button class="nav-item nav-link ">Profile</button>
            </div>
          </div>
        </nav>

```

The code above was created by adapting the code in [Bootstrap Documentation](https://getbootstrap.com/docs/4.0/components/navbar/) as shown below:

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
```

- <!---How---> The code in [Bootstrap Documentation](https://getbootstrap.com/docs/4.0/components/navbar/) was implemented by the Bootstrap team.
- <!---Why---> [Bootstrap Documentation](https://getbootstrap.com/docs/4.0/components/navbar/)'s Code was used as a template to create the navbar.
- <!---How---> [Bootstrap Documentation](https://getbootstrap.com/docs/4.0/components/navbar/)'s Code was modified by changing the names of tags according to my needs.

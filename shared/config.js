var config = {
  tabData: {
    tab1: [
      'This app demonstrates how to use client-side packages to configure element positioning and present different UI themes.',
      'It also shows how to pull content from the cloud.',
      'Click through the other tabs for more information and tips.',
      'Check out <a href="http://docs.feedhenry.com/wiki/App_Anatomy" target="_blank">this link</a> for full documentation on using packages.',
      '<div id="mainContainer"><div id="nyanCat"><div id="wholeHead"><div class="skin ear"></div><div class="skin ear rightEar"></div><div id="mainHead" class="skin"><div class="eye"></div><div class="eye rightEye"></div><div class="nose"></div><div class="chick"></div><div class="chick rightChick"></div><div class="mouth">E</div></div></div><div id="toastBody"><div>&nbsp;  &nbsp; &nbsp;.&nbsp;&nbsp;.&nbsp; &nbsp; &nbsp;..&nbsp;  &nbsp; &nbsp;.&nbsp;.&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;..&nbsp;  &nbsp; &nbsp;.&nbsp;&nbsp;.</div></div><div id="wholeTail"><div class="tail skin"></div><div class="tail middleTail skin"></div><div class="tail backTail skin"></div></div><div id="allYourLegAreBelongToUs"><div class="skin leg back leftBack"></div><div class="skin leg back"></div><div class="skin leg front leftFront"></div><div class="skin leg front"></div></div><div class="rainbow"></div><div class="rainbow r2"></div><div class="rainbow r3"></div><div class="rainbow r4"></div></div><div class="star starMovement1"><div number="1"></div><div number="2"></div><div number="3"></div><div number="4"></div><div number="5"></div><div number="6"></div><div number="7"></div><div number="8"></div></div><div class="star starMovement2 backwards"><div number="1"></div><div number="2"></div><div number="3"></div><div number="4"></div><div number="5"></div><div number="6"></div><div number="7"></div><div number="8"></div></div><div class="star starMovement3"><div number="1"></div><div number="2"></div><div number="3"></div><div number="4"></div><div number="5"></div><div number="6"></div><div number="7"></div><div number="8"></div></div><div class="star starMovement4"><div number="1"></div><div number="2"></div><div number="3"></div><div number="4"></div><div number="5"></div><div number="6"></div><div number="7"></div><div number="8"></div></div><div class="star starMovement5"><div number="1"></div><div number="2"></div><div number="3"></div><div number="4"></div><div number="5"></div><div number="6"></div><div number="7"></div><div number="8"></div></div></div></div>',
    ],
    tab2: [
      'The "default" package contains the core of the app. It is represented by the directory /client/default.',
      'The main start file for this app is index.html - it\'s full path is /client/default/index.html.',
      'To begin exploring this app, start by looking at the index.html file.',
      'The main JavaScript for this app is in init.js - here we initialise the contents of the tabs, and set up scrolling.',
      'This app uses iScroll to manage scrolling of content that flows outside of the viewport. To demonstrate the use of this library, we\'ve added some generic text to this tab.',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat sem, tristique dignissim facilisis sit amet, congue ac sem. Ut nec consectetur neque. Ut sit amet dui leo. Aliquam elementum posuere tempus. Sed et mi elit, sed ultricies leo. Ut non nisi orci, sit amet sagittis justo. Mauris rutrum dignissim lacus, eu mollis sem facilisis in. Curabitur sit amet est ligula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris sit amet accumsan arcu.",
      "Nam congue fringilla odio non pulvinar. In id neque leo, vitae vehicula massa. Cras varius orci posuere massa congue quis vulputate libero varius. Quisque rutrum tellus vel nisi interdum id congue mauris mattis. Proin suscipit elit id magna blandit dignissim facilisis tellus pharetra. Aenean justo quam, egestas in ornare ac, gravida in leo. Donec viverra ante vel lectus consectetur vitae consectetur justo euismod. Etiam ligula sem, tristique sed sollicitudin vitae, pharetra vel sapien. Nam non sem dignissim velit fermentum tincidunt sit amet sit amet lectus. Integer lobortis luctus tortor et tempor. Aliquam id molestie libero. Nunc erat risus, convallis quis feugiat at, lobortis non orci. Sed a felis ante, ut rhoncus massa. Suspendisse potenti."
    ],
    tab3: [
      'The extra packages contain an override prefs.js which positions the tabs at different areas on screen.',
      'The iOS and Android packages contain different UI themes - which consist of some different css and different images.',
      'Try adding each of these packages to the Studio Preview under the Configuration accordion item and see the differences after refreshing this preview.'
    ],
    tab4: [
      'The content for the tabs in this app are configured in /shared/config.js',
      'When the app starts up, the latest config is read from the server, and used.',
      'If the config can\'t be retrieved, a fallback of the last known configuration is used.',
      'If there was no last configuration, the app defaults to using the config bundled with the app.',
      'To demonstrate the usefulness of this pattern, the Reload button can be used to update the tab contents after the app has been deployed. From the Studio, edit the contents for any of the tab data in /shared/config.js (after deploying the app to a device) and press the Reload button.'
    ]
  }
};

exports.config = config;

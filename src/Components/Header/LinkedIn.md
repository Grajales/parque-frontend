Joseph Simmons  5 hours ago
https://www.linkedin.com/in/josephdsimmons/

Peter Fuoco  5 hours ago
https://www.linkedin.com/in/peterfuoco

Thiago  5 hours ago
https://www.linkedin.com/in/thiagojc89/

Gary Haywood  5 hours ago
https://www.linkedin.com/in/garyhaywood/

Chris Beranek  5 hours ago
https://www.linkedin.com/in/chris-beranek

Liliana Grajales  4 hours ago
https://www.linkedin.com/in/liliana-grajales-21283aa

Mark S  4 hours ago
https://www.linkedin.com/in/mark-stuebs/

Bingcheng Ni  4 hours ago
https://www.linkedin.com/in/bingcheng-ni-28885962

Rich Korneisel  43 minutes ago
www.linkedin.com/in/richard-korneisel

Some good HackerRank practice tests to take:
https://www.hackerrank.com/skills-verification/javascript_basic
https://www.hackerrank.com/interview/interview-preparation-kit
https://www.hackerrank.com/skills-verification/react_basic
https://www.hackerrank.com/skills-verification/python_basic

[Add a dotenv file to a React App]('https://stackoverflow.com/questions/49579028/adding-an-env-file-to-react-project)

2. [Documentation](https://expressjs.com/en/4x/api.html)
1. [Returning sorted results from a db query](https://stackoverflow.com/questions/36259532/sequelize-findall-sort-order-in-nodejs)
expressjs.comexpressjs.com

Git commands for branches and merges.
Create a branch git branch your-branch-name
Checkout a branch git checkout branch-name-you-want-to-checkout
Merge in changes from another branch to the branch that you are on git merge other-branch-name
Initial push of your branch git push origin branch-name:branch-name
Subsequent pushes of your branch git push origin branch-name

To view formatted JSON in your browser, add one of these extensions depending which browser you are using
Firefox - https://addons.mozilla.org/en-US/firefox/addon/jsonview/
Chrome - https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en (edited) 

Peter Fuoco  10:56 AM
CORS issues with your API request? You can prepend this URL to your endpoint to try bypassing the error: https://cors-anywhere.herokuapp.com
In production, you wouldn't use the above URL. You might do something like build your own server to proxy the API, which is what we're simulating with the above URL. If you want to learn more, here is a great breakdown of CORS: https://www.moesif.com/blog/technical/cors/Authoritative-Guide-to-CORS-Cross-Origin-Resource-Sharing-for-REST-APIs/
Additional React Resources:
React State vs. Props
https://lucybain.com/blog/2016/react-state-vs-pros/
Understanding State in React
https://thinkster.io/tutorials/understanding-react-state
Understanding this.setState
https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b
Understanding setState
https://css-tricks.com/understanding-react-setstate/
React State FAQs
https://reactjs.org/docs/faq-state.html
(edited)

Peter Fuoco  9:53 AM
**/node_modules
9:53
https://docs.github.com/en/github/managing-large-files/removing-files-from-a-repositorys-history

Peter Fuoco  10:07 AM
Steps for removing node_modules after you've pushed them up to github:
https://gist.github.com/lmcneel/45594e550a3403d589bdcaad38138a83

Joseph Simmons  10:08 AM
npx create-react-app@latest your-project-name --use-npm
10:10
npm init react-app the-name-of-your-app

React Router Lab (National Parks):
Here's one way to display the 1st image at the top of the ParkDetail component (or whatever your show page component is for each park), and all the other images below it so the 1st image isn't duplicated. Hardcode the 1st image (ParkData.images[0].url) and when you map over all the park's images(parkImages), remove the first image with the shift() method so all but the first image is rendered below
class ParkDetail extends Component {
    render() {
        let parkId = this.props.match.params.id
        let ParkData= this.props.parks.find(value =>
            value.id === parkId
            )
            let parkDataImages = ParkData.images
            const parkImages = parkDataImages.map((value, index) =>
                <div key={index}>
                    <img src={value.url}></img>
                </div>
            )
            parkImages.shift();
        return (
            <div>
                <h1>Image 1</h1>
                <img src={ParkData.images[0].url}/>
                <h1>Other Images</h1>
                {parkImages}
            </div>
        );
    }
}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

JSX fragments are the <> notation I was showing in my example earlier, which basically allow you render children in a child component while keeping valid HTML in certain cases: https://reactjs.org/docs/fragments.html#short-syntax

Here's some reasoning behind using a key in React https://reactjs.org/docs/lists-and-keys.html#keys

Example of API request without .then :
componentDidMount = async() => {
    const API_KEY = "API KEY HERE";
    let response = await axios.get(`https://developer.nps.gov/api/v1/parks?api_key=${API_KEY}`);
    // console.log(response);
    this.setState({
      parks: response.data.data
    });
  };

  componentDidMount(){
    fetch(“https://developer.nps.gov/api/v1/parks?api_key=L6qR1FStEBH0MfgNzGO5Suh1lO15Rk6rbLpgSHNp”, {
      method: “GET”
    })
      .then(
        response => response.json()
        .then(data => this.setState({parks: data.data}))
      )
      /*.then((responseData) => {
        console.log(“Here”)
        console.log(responseData)
        this.setState({ parks: responseData});
      })*/
      .catch(error =>  {
        console.log(error)
        this.setState({ error })
      });
  }

  https://www.geeksforgeeks.org/bucket-sort-2/

  Helpful method for the show page in the Audobon HW - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

  React Router Resources
1.Set up/code snippet- https://reactrouter.com/web/guides/quick-start
2.Detailed summaries of react router components, check out 'wildcard' redirect and other robust features- https://medium.com/@AkyunaAkish/understanding-react-router-4-df73a66d96c4 (edited) 

const allReceipt = this.state.receipts.map((receiptElem, index)=>{
     return <Receipt receipt={receiptElem} key={index}/>
})
const allReceipt = this.state.receipts.map((receiptElem, index) => <Receipt receipt={receiptElem} key={index}/>)
these are the same thing
just different syntax
2:21
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#comparing_traditional_functions_to_arrow_functions

Good info on how this.setState({}) works- https://css-tricks.com/understanding-react-setstate/

https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/ (edited) 

I like this one for grid too: https://grid.layoutit.com/

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

https://css-tricks.com/snippets/css/complete-guide-grid/

React Developer Tools Chrome extension: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
React Developer Tools Firefox extension: https://addons.mozilla.org/en-US/firefox/addon/react-devtools/ (edited) 
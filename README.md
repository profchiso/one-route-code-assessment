# one-route-code-assessment

[Go to the api documentation](https://documenter.getpostman.com/view/7669287/UzBqpkNK)

### How setup the project on your local machine

To setup this project locally,

1. [Clone the repository](https://github.com/profchiso/one-route-code-assessment)

2. Move to the folder where it is clone and type the command `npm install` to install the dependencies

3. User this link [Get 360dialog sandbox api key](https://wa.me/4930609859535?text=START) to generate your API key for your whatapp number

4. Add the values of the environment variable as shown here [ENV vars](https://github.com/profchiso/one-route-code-assessment/blob/dev/sample.env)
   - WABA*SANDBOX_API_KEY=\_the api key you get from set 3*
   - SANDBOX*NUMBER=\_the sandbox number which is 4930609859535*
   - USER*NUMBER=\_Your whatapp phone number*
   - POSTGRES*DATABASE=\_your local postgres database name*
   - POSTGRES*DIALECT=\_your local postgres dialet*
   - POSTGRES*HOST=\_your local postgres host which is localhost or 127.0.0.1*
   - POSTGRES*PASSWORD=\_your local postgres password*
   - POSTGRES*USERNAME=\_your local postgres username*
   - PORT=_3000_
   - SANDBOX_BASE_URL= *https://waba-sandbox.360dialog.io*
   - WEBHOOK_URL=*https://one-route-test.herokuapp.com/api/v1/webhook*

# one-route-code-assessment

[Go to the api documentation](https://documenter.getpostman.com/view/7669287/UzBqpkNK)

### How setup the project on your local machine

To setup this project locally,

1. [Clone the repository](https://github.com/profchiso/one-route-code-assessment)

2. Move to the folder where it is clone and type the command `npm install` to install the dependencies

3. User this link [Get 360dialog sandbox api key](https://wa.me/4930609859535?text=START) to generate your API key for your whatapp number

4. Add the values of the environment variable as shown here [ENV vars](https://github.com/profchiso/one-route-code-assessment/blob/dev/sample.env)
   - WABA_SANDBOX_API_KEY = **the api key you get from step 3**
   - SANDBOX_NUMBER = **the sandbox number which is 4930609859535**
   - USER_NUMBER = **Your whatapp phone number**
   - POSTGRES_DATABASE = **your local postgres database name**
   - POSTGRES_DIALECT = **your local postgres dialet**
   - POSTGRES_HOST= **your local postgres host which is localhost or 127.0.0.1**
   - POSTGRES_PASSWORD = **your local postgres password**
   - POSTGRES_USERNAME = **your local postgres username**
   - PORT = **3000 or your desired port number**
   - SANDBOX_BASE_URL = **https://waba-sandbox.360dialog.io**
   - WEBHOOK_URL = **https://one-route-test.herokuapp.com/api/v1/webhook**

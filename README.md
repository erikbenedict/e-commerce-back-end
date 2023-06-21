# E-Commerce Back End

## Description

Internet retail, also known as e-commerce, is the largest sector of the electronics industry. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, I wanted to build the back end for an e-commerce site by configuring a working Express.js API to use Sequelize to interact with a MySQL database.

## Built With

- Express.js
- MySQL
- Sequelize
- DotEnv

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

- Clone the repo
  ```sh
  git clone git@github.com:erikbenedict/e-commerce-back-end.git
  ```
- Install NPM packages
  ```sh
  npm i
  ```
- Create database in MySQL
  ```sh
  mysql -u root -p
  ```
  ```sh
  source ./db/schema.sql
  ```
  ```sh
  quit
  ```
- Add seed data to the database
  ```sh
  npm run seed
  ```
- (!! IMPORTANT !!) Make sure to create a `.env` file in the `Develop` folder. Use the `.env.EXAMPLE` as a template to add your MySQL username and password to create the connection

## Usage

Below is a demo of the functionality for the back end of an e-commerce site. After setting up the connection/database, and invoking the application, I use Insomnia to test all API routes.

https://github.com/erikbenedict/e-commerce-back-end/assets/89614823/7eddcb6e-828b-4b10-95b5-f0ef3aeb9c59

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [MIT](https://choosealicense.com/licenses/mit/) for more information.

## Contact

If you have any questions please reach out via email!

- Email: erik.r.benedict@gmail.com
- Twitter: [@\_Erik_Benedict](https://twitter.com/_Erik_Benedict)
- Project Link: [https://github.com/erikbenedict/e-commerce-back-end](https://github.com/erikbenedict/e-commerce-back-end)

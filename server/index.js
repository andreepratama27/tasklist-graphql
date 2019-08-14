const {GraphQLServer} = require('graphql-yoga');
const models = require('./models');

const resolvers = {
  Query: {
    users(_, args) {
      return models.User.findAll().then(data => data);
    },
    user(_, {id}) {
      return models.User.findByPk(id).then(data => data);
    },
  },

  Mutation: {
    createUser(_, {name, email}) {
      return models.User.create({name, email}).then(data => data);
    },
    deleteUser(_, {id}) {
      return models.User.destroy({
        where: {
          id,
        },
      }).then(data => data);
    },
  },
};

// User.bulkCreate([
//   {name: 'Andre Pratama', email: 'andreepratama27@gmail.com'},
//   {name: 'Lionel Messi', email: 'lionelmessi@gmail.com'},
// ])
//   .then(() => {
//     return User.findAll();
//   })
//   .then(users => {
//     console.log(users);
//   });
//

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
});

server.start(() => console.log('server is running'));

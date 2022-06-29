module.exports = mongoose => {
  const Users = mongoose.model(
    "category",
    mongoose.Schema(
      {
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        city: String,
        //for populate userId
        
        userId: { type:mongoose.Schema.Types.ObjectId,ref:'user'},
        // userId: String,
        image: String,
        video: String,
        place:
        {
          type: Array
        },
        // company: { type: Array },
        company: [
          {
            title: { type: String, trim: true },
            description: { type: String, trim: true },
            content: { type: String, trim: true },
          },
        ],
        //   description: String,

      },
      { timestamps: true }
    )
  );
  return Users;
};
 {
    $group: {
      _id: "$userID",
      // convert string to int levelBoss
      countBoss : { $sum: { $toInt:'$levelBoss'} },
    },
  },
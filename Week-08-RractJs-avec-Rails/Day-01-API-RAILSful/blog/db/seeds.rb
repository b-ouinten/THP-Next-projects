# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Rails.application.eager_load!
ApplicationRecord.descendants.each { |model|
  model.delete_all
  ActiveRecord::Base.connection.reset_pk_sequence!(model.table_name)
  puts "The table #{model.table_name} was deleted !"
}

user = User.create(email: 'bouinten@yahoo.fr', password:'wazo6556')

5.times do
  User.create(
    email: Faker::Internet.email,
    password: Faker::Internet.password(min_length: 6)
  )
end

puts 'Table users was filled by a few records using Faker gem !'

users = User.all

30.times do 
  Article.create(
    title: Faker::Movie.title, 
    content: Faker::Movie.quote,
    user: users.sample
  )
end

puts 'Table articles was filled by a few records using Faker gem !'
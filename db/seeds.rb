# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#scheduled event 
# t.string "eventName"
# t.date "date"
# t.string "time"
# t.string "description"
# t.string "image"
# t.string "createdBy"
# t.bigint "user_id", null: false

#"users"
# t.string "first_name"
# t.string "last_name"
# t.string "username"
# t.string "password_digest"
# t.string "user_profile_image"

puts "destroying data.."

User.destroy_all
ScheduledEvent.destroy_all

puts "creating users..."

tiff = User.create!(first_name: 'Tiffhanie', last_name: 'Ramos', username: 'tramos@gmail.com', password: 'password1', user_profile_image: 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png')

puts "creating events..."

ScheduledEvent.create!(eventName: 'Mitsuwa', date: '2022-04-21', time: '9:00 PM', description: 'Need groceries, craving ramen!', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/2d/cb/a0/mitsuwa.jpg', createdBy: 'Tiffhanie', user_id: tiff.id)




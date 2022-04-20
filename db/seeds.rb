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

User.destroy_all
ScheduledEvent.destroy_all

= 



class CreateScheduledEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :scheduled_events do |t|
      t.string :eventName
      t.date :date
      t.string :time
      t.string :description
      t.string :image
      t.string :createdBy
      t.integer :invitees, array: true, default: []
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end




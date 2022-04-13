class CreateScheduledEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :scheduled_events do |t|
      t.string :eventName
      t.date :date
      t.time :time
      t.string :description
      t.string :image
      t.string :createdBy

      t.timestamps
    end
  end
end

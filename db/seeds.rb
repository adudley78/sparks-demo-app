json = ActiveSupport::JSON.decode(File.read('db/seeds/sparks.json'))
json.each do |record|
  Spark.create!(record)
end

json = ActiveSupport::JSON.decode(File.read('db/seeds/comments.json'))
json.each do |record|
  Comment.create!(record)
end
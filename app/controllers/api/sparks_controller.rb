class Api::SparksController < ApplicationController

    # def index
    #     render json: { :sparks => [
    #         {
    #             :title => 'some-spark',
    #             :guid => '04156743-a0e8-4748-af68-a5f53a05c453'
    #         }
    #     ]}.to_json
    # end

    respond_to :json

  def index
    respond_with Spark.order(spark_date: :DESC)
  end

  def show
    respond_with Spark.find(params[:id])
  end

  def create
    respond_with :api, Spark.create(spark_params)
  end

  def destroy
    respond_with Spark.destroy(params[:id])
  end

  def update
    event = Spark.find(params['id'])
    event.update(spark_params)
    respond_with Spark, json: spark
  end

  private

  def spark_params
    params.require(:spark).permit(
      :id,
      :spark_type,
      :spark_date,
      :title,
      :url,
      :member,
      :published
    )
  
end

end
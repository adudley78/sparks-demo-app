class V1::SparksController < ApplicationController

    def index
        render json: { :sparks => [
            {
                :title => 'some-spark',
                :guid => '04156743-a0e8-4748-af68-a5f53a05c453'
            }
        ]}.to_json
    end

end
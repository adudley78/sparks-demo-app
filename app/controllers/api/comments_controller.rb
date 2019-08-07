class Api::CommentsController < ApplicationController
    respond_to :json

    def index
        respond_with Comment.order(comment_date: :DESC)
    end

    def show
        respond_with Comment.find(params[:id])
    end

    def create
        respond_with :api, Comment.create(comment_params)
    end

    def destroy
        respond_with Comment.destroy(params[:id])
    end

    def update
        comment = Comment.find(params[:id])
        comment.update(comment_params)
        respond_with Comment, json: comment
    end

    private

    def comment_params
        params.require(:comment).permit(
            :id,
            :content,
            :comment_date,
            :spark_id
        )
    end

end
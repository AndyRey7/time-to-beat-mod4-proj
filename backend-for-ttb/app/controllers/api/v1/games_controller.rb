class Api::V1::GamesController < ApplicationController
    def index
      games = Game.all
      render json: games, status: :ok
    end

    def show
      game = Game.find(params[:id])
      render json: games, status: :ok
    end

    def create
      game = Game.new(game_params)
      if game.save
        render json: game, status: :ok
      else
        render json: game.errors, status: :unproccessable_entity
      end
    end

    def update
      game = Game.find(params[:id])
      if game.update(game_params)
        render json: game, status: :ok
      else
        render json: game, status: :unproccessable_entity
      end
    end

    def delete
      game = Game.find(params[:id])
      game.destroy
      render json: game, status: :ok
    end

    private
        def game_params
          params.require(:game).permit(:title, :genre, :hours, :imgURL)
        end
end

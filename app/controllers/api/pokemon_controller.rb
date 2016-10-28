class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    # render json: @pokemon
  end

  def show
    @pokemon = Pokemon.find_by(id: params[:id])
    # render json: @pokemon
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :show
    else
      render json: {error: @pokemon.errors.full_messages}, status: 422
    end
  end

  def pokemon_params
    params.require(:pokemon).permit(
      :name, :attack, :defense, :poke_type,
      :image_url, moves: [], item_ids: []
    )
  end
end

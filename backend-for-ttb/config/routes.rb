Rails.application.routes.draw do
    namespace 'api' do    # creates an /api/v1 path
    namespace 'v1' do
      resources :games
    end
  end
end

# app/controllers/auth_controller.rb
class AuthController < ApplicationController
  skip_before_action :verify_authenticity_token

  def signin
    result = ::UseCases::Auth::Signin.new(params).call
    render_result(result)
  end

  def signup
    result = ::UseCases::Auth::Signup.new(params).call
    render_result(result)
  end

  private

  def render_result(result)
    if result[:error]
      
      render json: { error: result[:error] }, status: result[:code] || :bad_request
    else
      render json: { token: result[:token], user: result[:user] }, status: :ok
    end
  end
end

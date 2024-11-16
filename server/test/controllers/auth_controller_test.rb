require "test_helper"

class AuthControllerTest < ActionDispatch::IntegrationTest
  test "should get signin" do
    get auth_signin_url
    assert_response :success
  end

  test "should get signup" do
    get auth_signup_url
    assert_response :success
  end
end

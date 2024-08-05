require "minitest/autorun"
require "string_helper"

class MyGemTest < Minitest::Test
  def test_hello
    assert_equal "Hello, world!", MyGem.hello
  end
end
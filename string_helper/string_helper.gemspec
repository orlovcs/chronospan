
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "string_helper/version"

Gem::Specification.new do |spec|
  spec.name          = "string_helper"
  spec.version       = StringHelper::VERSION
  spec.authors       = ["orlovcs"]
  spec.email         = ["hello@orlovcs.com"]

  spec.summary       = %q{"Ruby gem offering essential string manipulation methods such as capitalization, reversing, whitespace stripping, and converting between snake_case and CamelCase formats. Perfect for enhancing your Ruby applications with straightforward and efficient string handling."}
  spec.description   = %q{"A lightweight Ruby gem for essential string manipulations like capitalization, reversing, whitespace stripping, and converting between snake_case and CamelCase formats."}
  spec.homepage      = "https://github.com/orlovcs/string-helper"
  spec.license       = "MIT"

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  if spec.respond_to?(:metadata)
    spec.metadata["allowed_push_host"] = "http://mygemserver.com"

    spec.metadata["homepage_uri"] = spec.homepage
    spec.metadata["source_code_uri"] = "https://github.com/orlovcs/string-helper"
    spec.metadata["changelog_uri"] = "https://github.com/orlovcs/string-helper/blob/main/CHANGELOG.md"
  else
    raise "RubyGems 2.0 or newer is required to protect against " \
      "public gem pushes."
  end

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files         = Dir.chdir(File.expand_path('..', __FILE__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]


end

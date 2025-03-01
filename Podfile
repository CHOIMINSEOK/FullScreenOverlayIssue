# Resolve react_native_pods.rb with node to allow for hoisting
require Pod::Executable.execute_command('node', ['-p',
  'require.resolve(
    "./rn-app/node_modules/react-native/scripts/react_native_pods.rb",
    {paths: [process.argv[1]]},
  )', __dir__]).strip

platform :ios, min_ios_version_supported
use_frameworks!
prepare_react_native_project!

linkage = ENV['USE_FRAMEWORKS']
if linkage != nil
  Pod::UI.puts "Configuring Pod with #{linkage}ally linked Frameworks".green
  use_frameworks! :linkage => linkage.to_sym
end

target 'RNModalIssueApp' do
  Dir.chdir('./rn-app') do
    config = use_native_modules!

    use_react_native!(
      :path => config[:reactNativePath],
      :fabric_enabled => true,
      :new_arch_enabled => true,
      :hermes_enabled => true,
      # An absolute path to your application root.
      :app_path => "#{Pod::Config.instance.installation_root}/rn-app"
    )

    post_install do |installer|
      # https://github.com/facebook/react-native/blob/main/packages/react-native/scripts/react_native_pods.rb#L197-L202
      react_native_post_install(
        installer,
        "rn-app/node_modules/react-native",
        :mac_catalyst_enabled => false,
        # :ccache_enabled => true
      )

      installer.pods_project.targets.each do |target|
        target.build_configurations.each do |config|
          config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = 15.0
        end
      end

    end
  end
end

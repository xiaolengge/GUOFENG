<template>
	<div class="person">
		<el-tabs :tab-position="tabPosition" class="person1">
			<el-tab-pane label="新手入门">
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="填写用餐信息" name="first">
						<div class="person3">
							<el-row :gutter="20">
								<el-col :span="7" class="person4">
									<div class="grid-content bg-purple">
										<div>
											<i class="el-icon-document"></i>
											<div>填写电子邮箱或手机</div>
										</div>
										<div>
											<i class="el-icon-office-building"></i>
											<div>填写送餐信息</div>
										</div>
									</div>
								</el-col>
								<el-col :span="17">
									<div class="grid-content bg-purple person5">
										请填写常用的电子邮箱或手机登录，阅读并同意《
										<a href="">用户协议</a>
										》后， 填写送餐信息（包括顾客姓名、送餐联系电话、送餐地址等）并 选择送餐时间后进入菜单点餐。
									</div>
								</el-col>
							</el-row>
						</div>
					</el-tab-pane>
					<el-tab-pane label="浏览菜单" name="second">
						<div class="person3">
							<el-row :gutter="20">
								<el-col :span="24">
									<div class="grid-content bg-purple person5">
										从左侧菜单点击类别（如主食，冷饮等），然后选择您喜爱的餐点，输入份数，点击"订购"，该餐点就被加入右侧的"我的订单"。
										<br />
										<br />
										"我的订单"中将罗列您的点餐内容和金额，可点击取消或增减某项餐点，也可点击进入"下一步"。
									</div>
								</el-col>
							</el-row>
						</div>
					</el-tab-pane>
					<el-tab-pane label="确认订单" name="third">
						<div class="person3">
							<el-row :gutter="20">
								<el-col :span="5" class="person4">
									<div class="grid-content bg-purple">
										<div>
											<i class="el-icon-document"></i>
											<div>再次检查订单</div>
										</div>
										<div>
											<i class="el-icon-office-building"></i>
											<div>检查送餐信息</div>
										</div>
									</div>
								</el-col>
								<el-col :span="19">
									<div class="grid-content bg-purple person5">
										请填写常用的电子邮箱或手机登录，阅读并同意《用户协议》后， 填写送餐信息（包括顾客姓名、送餐联系电话、送餐地址等）并
										选择送餐时间后进入菜单点餐。
									</div>
								</el-col>
							</el-row>
						</div>
					</el-tab-pane>
					<el-tab-pane label="选择支付方式" name="fourth">
						<div class="person3">
							<el-row :gutter="20">
								<el-col :span="5" class="person4">
									<div class="grid-content bg-purple">
										<div>
											<i class="el-icon-document"></i>
											<div>支付方式</div>
										</div>
										<div>
											<i class="el-icon-office-building"></i>
											<div>提交订单</div>
										</div>
									</div>
								</el-col>
								<el-col :span="19">
									<div class="grid-content bg-purple person5">
										我们提供了货到现金付款，网上支付（包括网上银行和支付宝即时到账交易 ）两种支付结算，请任选其一，然后提交您的订单。如果您在订餐或网上支
										付过程中花费时间较长，可能导致您的送餐/外带时间顺延。
									</div>
								</el-col>
							</el-row>
						</div>
					</el-tab-pane>
				</el-tabs>
			</el-tab-pane>
			<el-tab-pane label="常见问题">
				<div class="person3">
					<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
						<el-tab-pane label="现在有什么优惠活动" name="first">
							<h4>*现在有什么优惠活动？</h4>
							<div>
								您可以通过以下方式查看：
								<ul>
									<li>在首页查看当前网上订餐的"新品/优惠"、"非常关注"信息；</li>
									<li>
										在您完成网上订餐前，根据您的点餐内容和金额，我们将自动列出符合条件的优惠项目，
										供您选择，您可添加优惠项目或放弃。订餐的总金额将根据您最后确认的订餐内容和优惠项目 重新计算。提醒您注意的是：
										<ol>
											<li>如果您增加、减少或删除了点餐内容或数量，优惠项目将相应调整或取消；</li>
											<li>所有印刷版和电子版的肯德基和肯德基宅急送优惠券均不可在网上订餐使用；</li>
											<li>所有随餐附赠的优惠券，均不可在当次点餐时使用；</li>
											<li>根据您的送餐地址，您可以享受的优惠项目可能存在差异，请以我们网上列出的优惠项目为准。</li>
										</ol>
									</li>
								</ul>
							</div>
						</el-tab-pane>
						<el-tab-pane label="怎么输送送餐地址" name="second">
							<h4>* 如何输入正确的送餐地址？</h4>
							<div>
								请按如下介绍输入您的送餐地址：
								<ul>
									<li>
										送餐城市：您可以在空白框内输入送餐城市的中文或汉语拼音首字母，然后在下拉框中找到该城市名。如未找到，则表示该城市目前还无法提供网上订餐服务。
									</li>
									<li>
										路名/小区名：请在空白框内输入您送餐地址路名或小区名中的关键字（如：东方路、中华小区、
										解放一村等），然后点击"查询"按钮，在下拉框中自动列出的区域直接点选确认。如未找到，则表示该区域目前还无法提供网上订餐服务。
									</li>
									<li>请继续填全：请在空白框内继续将您的详细送餐地址填全（如：10弄1号101室等）。请注意：如此处与路名/小区名填写内容有矛盾，则视为无效订单。</li>
								</ul>
								<h4>* 我的送餐地址是否可以输入英文/繁体中文/拼音？</h4>
								<div>很抱歉，我们只接受简体中文输入。</div>
							</div>
						</el-tab-pane>
						<el-tab-pane label="不在送餐范围内" name="third">
							<h4>* 为什么我的送餐地址不在你们的送餐范围内？</h4>
							<div>
								可能有以下原因：
								<ul>
									<li>您的送餐地址确实超出我们的送餐范围，造成无法送餐；</li>
									<li>
										送餐地址输入有误，建议您：
										<ol>
											<li>尝试缩短或更改路名/小区名的关键字进行查询（例：将"虹桥路2号"改为"虹桥"）</li>
											<li>检查您输入的地址是否有以下错误：输入地址不全、输入内容里含空格、错别字等</li>
											<li>
												我们的送餐范围有所变更，导致您的送餐地址确实超出我们的送餐范围，造成无法送餐；您可致电4008-823-823人工核查您的送餐地址是否在送餐范围内。
											</li>
										</ol>
									</li>
								</ul>
							</div>
							<h4>* 我以前电话订餐过，我家的地址你们送过，为什么网站却显示说超出送餐范围呢？</h4>
							<div>
								可能有以下原因：
								<ul>
									<li>送餐地址输入有误，建议检查是否有以下错误：输入地址不全、输入内容里含空格、错别字等；</li>
									<li>
										我们的送餐范围有所变更，导致您的送餐地址确实超出我们的送餐范围，造成无法送餐；您可致电4008-823-823人工核查您的送餐地址是否在送餐范围内。
									</li>
								</ul>
							</div>
							<h4>* 为什么我的送餐地址不在你们的送餐范围内？</h4>
							<div>很抱歉，为了保证食物质量，我们有严格的外送范围规定，如果您的送餐地址超出了我们的外送范围，我们将无法提供肯德基宅急送服务。敬请谅解。</div>
						</el-tab-pane>
						<el-tab-pane label="设置/忘记密码" name="fourth">
							<h4>* 怎么设置密码？</h4>
							<div>点击"我要订餐"，在页面输入使用过的电子邮箱或手机，找到您的顾客信息，然后点击"设置密码"后，根据提示进行设置。</div>
							<h4>* 我忘了密码怎么办？</h4>
							<div>点击"我要订餐"，在页面输入使用过的电子邮箱，然后点击"忘记密码"后，根据提示进行设置。</div>
						</el-tab-pane>
						<el-tab-pane label="忘了登录邮箱" name="fifth">
							<h4>* 我忘了登录邮箱怎么办？</h4>
							<div>
								请输入您上次订餐时填写的手机号码，系统会显示您上次订餐时的顾客信息（如您未设置密码，顾客信息会被部分隐藏），其中含有登录邮箱，或者您可重新申请一个电子邮箱进行订餐。
							</div>
						</el-tab-pane>
						<el-tab-pane label="如何点餐" name="sixth">
							<h4>* 如何点餐?</h4>
							<div>请点击"新手入门"查看订餐步骤。</div>
						</el-tab-pane>
						<el-tab-pane label="订餐送出来了吗？" name="seventh">
							<h4>* 我订的餐什么时候能送过来？</h4>
							<div>
								我们承诺的最快送达时间，一般为您成功提交网上订单后起加30分钟左右（在提交订单前，系统将与您确认送餐时间），如遇恶劣天气，交通拥堵或送餐高峰，送餐时间略有增加，敬请谅解。
							</div>
							<h4>* 我想知道我的订餐送出来了吗？</h4>
							<div>您可以在"查询订单"中查询本次订餐的所有信息和送餐进程。如果超出我们的预估外送时间，您还没有收到餐点，请致电4008-823-823查询。</div>
						</el-tab-pane>
						<el-tab-pane label="修改/取消订餐" name="eighth">
							<h4>* 我想修改/取消我的订餐内容怎么办？</h4>
							<div>
								在您提交订单前, 您可以随时选择"继续点餐"返回菜单修改订餐内容，或直接放弃订餐； n
								<br />
								在您成功提交订单后，您的订单会立即下到我们的餐厅开始制作食品，因此我们将无法接受修改或取消订单。敬请配合和谅解。
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>
			</el-tab-pane>
			<el-tab-pane label="支付方式" class="person3">
				<h4>货到现金付款</h4>
				<div>肯德基宅急送网上订餐服务提供了货到现金付款、网上支付（包括网上银行和支付宝即时到帐交易）两种支付结算方式。</div>
				<h4>网上支付</h4>
				<div>
					<ol>
						<li>
							<h4>网上银行支付流程：</h4>
							<ol>
								<li>点击选择您想要网上支付的银行后，点击"提交"，系统即向相应银行发送支付请求；</li>
								<li>自动登录相应银行支付界面，输入支付卡号及验证码；</li>
								<li>输入银行的个人验证信息，如动态口令等。具体以各个银行的要求为准；</li>
								<li>输入支付密码和验证码；</li>
								<li>支付成功（网上支付完成后，银行将立刻反馈您支付结果和交易流水号）；</li>
								<li>支付成功后，页面将自动返回到肯德基宅急送网上订餐网站，提示"订单提交成功！"。</li>
							</ol>
						</li>
						<li>
							<h4>支付宝支付流程（即时到帐交易）：</h4>
							<ol>
								<li>点击选择支付宝后，点击"提交"，系统即向支付宝发送支付请求；</li>
								<li>选择使用支付宝余额付款；</li>
								<li>输入支付密码；</li>
								<li>支付成功（网上支付完成后，支付宝将立刻反馈您支付结果和交易流水号）；</li>
								<li>支付成功后，页面将自动返回到肯德基宅急送网上订餐网站，提示"订单提交成功！"；</li>
								<li>
									支付宝支付注意事项：
									<ul>
										<li>
											肯德基宅急送仅接受支付宝即时到帐交易，交易前请确保您的支付宝账号内有足够金额，或请先前往支付宝网站进行充值；切勿在支付宝网站进行本订单的付款；
										</li>
										<li>其他支付宝支付的注意事项及常见问题解答请点击 www.alipay.com ；</li>
										<li>了解如何申请使用支付宝（包括支付宝卡通），请点击 www.alipay.com ；</li>
										<li>
											支付宝安全措施：
											<ol>
												<li>认证：http://club3.alipay.com/yy/club/xinshou/teach/2301.html</li>
												<li>数字证书：http://club3.alipay.com/yy/club/xinshou/teach/2401.html</li>
												<li>手机绑定：http://club3.alipay.com/yy/club/xinshou/teach/25a01.html</li>
											</ol>
										</li>
									</ul>
								</li>
							</ol>
						</li>
						<li>
							<h4>网上支付注意事项：</h4>
							<ol>
								<li>如您选择了网上支付且付款成功，在订餐送达时您无须再支付现金，但须在送餐确认单上签字表明已收到所订餐点；</li>
								<li>如您选择了网上支付且付款成功，您可在"查询订单"中查询到本次订单详情及订单进程、网上付款的支付时间、金额、退款进程等相关支付信息；</li>
								<li>
									如您选择了网上支付且付款成功，但随后通过电话修改了您的订餐内容，您需要首先全额现金支付修改订单的订餐金额，然后通过网上银行或支付宝的退款流程，我们会尽快把原订单的全款退还给您。根据各银行和支付宝的不同规定，退款期通常不超过一个月。如果新订单金额与原订单金额一致，原网上支付仍然有效；
								</li>
								<li>如果您对自己的支付账单或退款事宜有疑问的话，请拨打相关银行的客户服务热线查询；</li>
								<li>
									由于网上支付是即时向银行或支付宝系统提交支付信息的，所以如出现您的卡内金额不足，意外断线等状况而导致支付的不成功，则无法对该订单进行补充支付，您只能回到订餐页面重新提交支付请求，或者改为货到付款的支付方式；
								</li>
								<li>
									整个网上支付过程可能因人而异，需要一到几分钟的时间，请耐心等待，并在等待时不要进行任何刷新页面的操作，否则系统将提示："订单重复错误"。该设置是为防止网上的一些不正规的行为导致银行结算的发生。
								</li>
							</ol>
						</li>
						<li>
							<h4>网上银行支付应具备的条件：</h4>
							<div>您需持有网上支付平台所支持的银行卡种中的任一种银行卡，并且该卡已经开通网上银行的网上支付服务。</div>
						</li>
						<li>
							<h4>如何申请使用网上银行支付：</h4>
							<div>
								想要进行网上支付，仅有一张银行卡是不够的，您还需要为您的银行卡开通网上银行的网上支付功能，您可以到银行柜台开通，也可以通过银行的网站开通。不同银行的开通方式不同。
							</div>
						</li>
						<li>
							<h4>安全问题：</h4>
							<ol>
								<li>
									肯德基宅急送使用的网上支付平台是通过国内各大银行或支付宝进行操作的，其安全性是由银行或支付宝完全保障的。当用户需要填写银行卡资料时，实际上已经到达到银行，因此肯德基宅急送不收集任何用户的银行卡资料；
								</li>
								<li>
									肯德基宅急送使用的网上银行支付平台所支持的卡种，不但使用SSL128位加密算法和SET（安全电子交易）协议，还使用PKI（公钥基础设施）作为网上支付系统的安全架构，以保证网上数据的机密性、真实性、完整性和不可抵赖性；
								</li>
								<li>请您不要在公共场合输入您的银行卡或支付宝信息，以防被他人看到您的卡号（帐号）及密码；</li>
								<li>如果您需要得到更多与"网上支付安全"方面的信息，请您直接与您的发卡行联系。</li>
							</ol>
						</li>
						<li>
							<h4>顾客支付不能成功的原因：</h4>
							<ol>
								<li>支付银行卡并未开通网上支付功能；</li>
								<li>输入的银行卡帐号和密码不正确；</li>
								<li>支付银行卡上的金额不足以支付货款；</li>
								<li>支付过程中可能因为网速过慢、网络掉线、或在访问受限制的局域网内等网络通信故障，导致支付中断或失败；</li>
								<li>电脑没有接入INTERNET或其访问区域受限；</li>
								<li>IE版本过低，密码位数不足，IE参数设置不正确等；</li>
								<li>当选择完银行卡进入银行时，进行刷新页面的操作，会出现系统提示："订单重复错误"。该设置是为防止网上的一些不正规的行为导致银行结算的发生。</li>
							</ol>
						</li>
						<li>
							<h4>部分银行的客户服务热线，仅供参考：</h4>
							<p>
								<span class="person6">
									<span>银行</span>
									<span>卡种</span>
									<span>客户服务热线</span>
								</span>
							</p>
							<p>
								<span class="person6">
									<span>中国银行</span>
									<span>中银信用卡</span>
									<span>4006695566</span>
								</span>
							</p>
							<p>
								<span class="person6">
									<span>中国工商银行</span>
									<span>牡丹信用卡</span>
									<span>95588</span>
								</span>
							</p>
							<p>
								<span class="person6">
									<span>招商银行</span>
									<span>招行信用卡</span>
									<span>8008205555</span>
								</span>
							</p>
							<p>
								<span class="person6">
									<span>中国建设银行</span>
									<span>龙卡人民币贷记卡</span>
									<span>95533</span>
								</span>
							</p>
							<p>
								<span class="person6">
									<span>中国农业银行</span>
									<span>金穗信用卡</span>
									<span>8008195599</span>
								</span>
							</p>
							<p>
								<span class="person6">
									<span>交通银行</span>
									<span>太平洋贷记卡</span>
									<span>95559</span>
								</span>
							</p>
							<p>
								<span class="person6">
									<span>兴业银行</span>
									<span>兴业信用卡</span>
									<span>95561</span>
								</span>
							</p>
						</li>
					</ol>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tabPosition: 'left',
			active: 0,
			activeName: 'first'
		};
	},
	methods: {
		handleClick(tab, event) {
			console.log(tab, event);
		},
		goBack() {
        console.log('go back');
      }
	}
};
</script>

<style>
.is-left {
	padding: 10px 0 10px 0;
	height: 100%;
}
.person {
	width: 1000px;
	position: relative;
	margin: 0 auto;
}
/* .person1 {
	width: 760px;
	position: relative;
	margin: 0 auto;
} */
.person3 {
	border-radius: 10px;
	border: 2px solid #ebeef5;
}
.person3 h4 {
	border-bottom: 2px solid #ebeef5;
}
.person4 {
	border-right: 2px solid #ebeef5;
}
.person5 {
	text-align: center;
	padding-top: 20px;
}
.person5 a {
	color: #f56c6c;
}
.person6 span {
	width: 100px;
	padding-left: 50px;
	color: #f56c6c;
}
.person7 {
	width: 100%;
	text-align: center;
	padding: 20px 0px 30px 0px;
	color: #9fa4a4;
}
.person8 {
	text-align:center;
	border-right: 2px solid #ebeef5;
	padding: 0px 25px 0px 25px;
}
li {
	color: #585858;
}
.el-row {
	margin-bottom: 20px;
	&:last-child {
		margin-bottom: 0;
	}
}
.el-col {
	border-radius: 4px;
}
.bg-purple-dark {
	/* background: #99a9bf; */
}
.bg-purple-light {
	/* background: #e5e9f2; */
}
.grid-content {
	border-radius: 4px;
	min-height: 36px;
}
.grid-content div {
	padding-top: 10px;
	margin: 0 auto;
}
.grid-content div i {
	color: #22d783;
	position: relative;
	margin: 0 25%;
}
.row-bg {
	padding: 10px 0;
	/* background-color: #f9fafc; */
}
</style>
